import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='font-bold'>AI Tutor and Youtube Tutor:</p>
      <p className='text-md text-gray-500'>This project showcases your expertise in developing intelligent chatbots for educational purposes. With a React frontend and a Django backend, users can interact with chatbots to ask questions about YouTube videos or PDF documents without needing to watch or read the entire content. Leveraging advanced Language Models (LLMs) like PALM and LLAMA, you've enabled natural language understanding and generation. The incorporation of text embeddings enhances data representation and content retrieval within PDFs, while the use of langchain ensures coherent and context-aware conversations. Additionally, the dynamic and user-friendly React components provide a seamless user experience.</p>
      <p className='font-bold'>Document Chat App:</p>
      <p className='text-md text-gray-500'>The Document Chat App is a web application designed to facilitate efficient communication and collaboration around documents. Built using modern web technologies, including React for the frontend and Node.js for the backend, users can upload documents and engage in real-time conversations, complete with cross-questioning based on the document's content. Leveraging Pinecone for vector database management and MongoDB for data storage, this app provides a robust platform for document-centric discussions and collaboration.</p>
      <p className='font-bold'>Blogging Website:</p>
      <p className='text-md text-gray-500'>This blogging website serves as a platform for sharing your insights, experiences, and projects with the world. Built with React for the frontend, Node.js for the backend, and MongoDB for data storage, it offers a seamless user experience for both readers and writers. With features like user authentication using Firebase, users can create accounts, publish blog posts, and engage with other users through comments and discussions. Additionally, integrating email notifications using SendGrid API ensures that users stay updated about new posts and discussions on the platform, enhancing user engagement and community interaction.</p>
      <CallToAction />
    </div>
  )
}