import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    setIsSubmitting(true);
    await onSend({ content: value });
    setValue('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Mesajınızı veya komutunuzu yazın. Örnek: /özet Proje notlarım"
        style={{ minHeight: '120px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'rgba(148, 163, 184, 0.75)', fontSize: '0.85rem' }}>
          Desteklenen komutlar: /özet, /çevir, /rol, /format
        </div>
        <button
          className={classNames('button-primary')}
          type="submit"
          disabled={isSubmitting}
          style={{ minWidth: '160px', textAlign: 'center' }}
        >
          {isSubmitting ? 'Yanıt hazırlanıyor...' : 'Gönder'}
        </button>
      </div>
    </form>
  );
};

ChatInput.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default ChatInput;
