import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const ChatMessage = ({ author, content, timestamp }) => {
  const isAssistant = author === 'assistant';
  return (
    <div
      style={{
        display: 'grid',
        gap: '0.35rem',
        justifyItems: isAssistant ? 'start' : 'end',
      }}
    >
      <span style={{ color: 'rgba(148, 163, 184, 0.65)', fontSize: '0.8rem' }}>
        {isAssistant ? 'Cortex Asistanı' : 'Siz'} • {dayjs(timestamp).format('HH:mm')}
      </span>
      <div
        style={{
          maxWidth: '520px',
          padding: '1rem 1.2rem',
          borderRadius: '18px',
          background: isAssistant ? 'rgba(99, 102, 241, 0.2)' : 'rgba(34, 211, 238, 0.2)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          whiteSpace: 'pre-wrap',
          textAlign: 'left',
        }}
      >
        {content}
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default ChatMessage;
