import { nanoid } from './nanoid.js';

const rolePresets = {
  genel: {
    tone: 'yardımsever',
    instructions:
      'Doğal ve profesyonel bir tonda kısa ve net cevaplar ver. Gerekirse maddeler kullan.',
  },
  ogretmen: {
    tone: 'öğretici',
    instructions: 'Kavramsal açıklamalar yap, örnek sorular öner ve öğrenmeyi kolaylaştır.',
  },
  gelistirici: {
    tone: 'teknik',
    instructions: 'Kod blokları ve komut satırı örnekleriyle detaylı, adım adım açıkla.',
  },
  yazar: {
    tone: 'yaratıcı',
    instructions: 'Duygusal yoğunluk, hikâyeleştirme ve metaforlarla yanıt ver.',
  },
  destek: {
    tone: 'empatik',
    instructions: 'Kullanıcı sorunlarına çözüm adımları ve güven verici ifadelerle yaklaş.',
  },
};

const commandHandlers = {
  '/özet': (content) => ({
    role: 'genel',
    meta: { intent: 'summary', original: content.replace('/özet', '').trim() },
  }),
  '/çevir': (content) => ({
    role: 'genel',
    meta: { intent: 'translate', original: content.replace('/çevir', '').trim() },
  }),
  '/rol': (content) => {
    const key = content.split(' ')[1] || 'genel';
    return { role: key.toLowerCase(), meta: { intent: 'switch-role', target: key.toLowerCase() } };
  },
  '/format': (content) => ({
    role: 'genel',
    meta: { intent: 'formatter', original: content.replace('/format', '').trim() },
  }),
};

export const interpretCommand = (content, currentRole) => {
  const command = Object.keys(commandHandlers).find((cmd) => content.startsWith(cmd));
  if (!command) return { role: currentRole, meta: { intent: 'default' } };
  return commandHandlers[command](content);
};

const formatReply = ({ role, meta, userMessage }) => {
  const preset = rolePresets[role] || rolePresets.genel;
  const base = `Ton: ${preset.tone}. Talimat: ${preset.instructions}`;
  switch (meta.intent) {
    case 'summary':
      return `${base}\n\nİçerik özeti:\n- ${meta.original || 'Özetlenecek metin belirtilmedi.'}`;
    case 'translate':
      return `${base}\n\nÇeviri talebi alındı. İçerik: ${meta.original || 'Çeviri metni belirtilmedi.'}`;
    case 'switch-role':
      return `${base}\n\nYeni rol: ${meta.target}. Kullanıcı mesajı: ${userMessage.content}`;
    case 'formatter':
      return `${base}\n\nFormat önerileri oluştur. Hedef içerik: ${meta.original || 'Formatlanacak metin yok.'}`;
    default:
      return `${base}\n\nSoru: ${userMessage.content}`;
  }
};

export const generateAssistantReply = async (conversation, userMessage) => {
  const interpreted = interpretCommand(userMessage.content, conversation.role);
  const responseText = formatReply({ role: interpreted.role || conversation.role, meta: interpreted.meta, userMessage });
  return {
    id: nanoid(),
    author: 'assistant',
    content: responseText,
    timestamp: new Date().toISOString(),
    meta: interpreted.meta,
  };
};
