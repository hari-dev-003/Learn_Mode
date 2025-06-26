import Navbar from '../components/Navbar'; 
import Card from '../components/Card';

function HomePage() { 
   return (
      <div className="grid grid-cols-[20%_80%] w-full h-screen">
        <Navbar />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Home Page</h1>
          <p className="text-lg mb-6">Welcome to our website! Here you can find various resources and information.</p> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Welcome to Our Site" description="Explore our courses and learn new skills." />
        <Card title="Latest News" description="Stay updated with the latest news and articles." />
        <Card title="Contact Us" description="Get in touch with us for any inquiries or support." /> 
         </div>
        </div>
      </div>
   );
}

export default HomePage;

