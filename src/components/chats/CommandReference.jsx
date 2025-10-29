const commands = [
  {
    label: '/özet',
    description: 'Uzun belgeleri madde madde özetler. Dosya içeriği veya metin ile kullanılabilir.',
  },
  {
    label: '/çevir',
    description: 'Mesajı hedef dile çevirir. Örn: /çevir en Bu metni İngilizceye çevir.',
  },
  {
    label: '/rol',
    description: 'Chatbot rolünü değiştirir. Örn: /rol gelistirici',
  },
  {
    label: '/format',
    description: 'Belirttiğiniz metni doküman veya e-posta formatına dönüştürür.',
  },
];

const CommandReference = () => (
  <div className="glass-panel" style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
    <h3>Komut Kılavuzu</h3>
    <p style={{ color: 'rgba(148, 163, 184, 0.75)' }}>
      Komutları sohbet akışı içinde kullanarak Cortex yapay zekâ motorunun davranışını anında değiştirebilirsiniz.
    </p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
      {commands.map((command) => (
        <li key={command.label} style={{ display: 'grid', gap: '0.35rem' }}>
          <span className="tag" style={{ width: 'fit-content' }}>
            {command.label}
          </span>
          <span style={{ color: 'rgba(148, 163, 184, 0.75)' }}>{command.description}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default CommandReference;
