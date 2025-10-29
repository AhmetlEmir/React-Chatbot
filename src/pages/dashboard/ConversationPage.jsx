import ChatWindow from '../../components/chats/ChatWindow.jsx';
import CommandReference from '../../components/chats/CommandReference.jsx';
import FileLibraryManager from '../../components/chats/FileLibraryManager.jsx';

const ConversationPage = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
    <ChatWindow />
    <div style={{ display: 'grid', gap: '1.5rem', alignSelf: 'flex-start' }}>
      <CommandReference />
      <FileLibraryManager />
    </div>
  </div>
);

export default ConversationPage;
