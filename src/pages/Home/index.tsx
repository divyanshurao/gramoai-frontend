// HomePage.tsx
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import Navbar from '../../components/navbar';
import HeroImg from '../../assets/hero.png'

const Home: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  
  const accounts = [
    { id: 1, name: 'Twitter', connected: true, icon: 'twitter', color: 'bg-blue-400' },
    { id: 2, name: 'LinkedIn', connected: true, icon: 'linkedin', color: 'bg-blue-700' },
    { id: 3, name: 'Instagram', connected: false, icon: 'instagram', color: 'bg-pink-500' },
    { id: 4, name: 'Facebook', connected: false, icon: 'facebook', color: 'bg-blue-600' }
  ];

  const recentPosts = [
    { id: 1, content: 'Excited to announce our new product launch!', platform: 'Twitter', status: 'Published', date: '2 hours ago' },
    { id: 2, content: 'Join us for a webinar on social media marketing strategies.', platform: 'LinkedIn', status: 'Scheduled', date: 'Tomorrow' },
    { id: 3, content: 'Check out our latest blog post on AI in social media management.', platform: 'Twitter', status: 'Draft', date: '-' }
  ];

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: 'grid' },
    { id: 'posts', name: 'Posts', icon: 'file-text' },
    { id: 'analytics', name: 'Analytics', icon: 'bar-chart-2' },
    { id: 'schedule', name: 'Schedule', icon: 'calendar' },
    { id: 'settings', name: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar/>

    {/* Hero Section */}
    <div className="bg-gradient-to-b from-[#5753f2]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-primary text-black mb-6 leading-tight">
            Create posts that engage on <span className="text-[#5753f2]"> LinkedIn.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect multiple social accounts, schedule content, and let AI generate engaging posts — all from one powerful dashboard.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex px-6 py-3 text-base font-medium rounded-lg text-white bg-[#5753f2] hover:bg-[#4542e0] transition-colors">
                <Linkedin size={20} fill='white' className='mr-4'/>
                Connect Linkedin
              </button>
              {/* <button className="px-6 py-3 text-base font-medium rounded-lg text-[#5753f2] bg-white border border-[#5753f2] hover:bg-[#5753f2]/5 transition-colors">
                Watch Demo
              </button> */}
            </div>
            {/* <div className="mt-8 text-sm text-gray-500">
              No credit card required • Free 14-day trial
            </div> */}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#5753f2]/10 rounded-lg transform rotate-3"></div>
            <div className="relative bg-white p-4 rounded-lg shadow-xl">
              <img 
                src={HeroImg} 
                alt="Dashboard preview" 
                className="rounded-lg shadow-sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trusted by Section */}
    {/* <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8 font-['Bricolage_Grotesque']">TRUSTED BY TEAMS AT</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="h-8 w-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div> */}

    {/* Features Section */}
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-['Bricolage_Grotesque'] text-black mb-4">
            One platform, unlimited possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your social media workflow with powerful AI-driven tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#5753f2]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#5753f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Connect Multiple Accounts</h3>
            <p className="text-gray-600">
              Link all your social profiles from Twitter, LinkedIn, Instagram, and Facebook in one unified dashboard.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#5753f2]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#5753f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Smart Scheduling</h3>
            <p className="text-gray-600">
              Plan and schedule your content across platforms at optimal times for maximum engagement.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#5753f2]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#5753f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">AI Content Generation</h3>
            <p className="text-gray-600">
              Create engaging, platform-optimized content with our advanced AI assistant.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* How It Works Section */}
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-['Bricolage_Grotesque'] text-black mb-4">
            How Gramo works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify your social media management in three easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="text-5xl font-bold text-[#5753f2]/10 absolute -top-6 -left-2">1</div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Connect your accounts</h3>
              <p className="text-gray-600">
                Link all your social media profiles to gramo with just a few clicks. We support Twitter, LinkedIn, Instagram, and Facebook.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="text-5xl font-bold text-[#5753f2]/10 absolute -top-6 -left-2">2</div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Create content with AI</h3>
              <p className="text-gray-600">
                Use our AI assistant to generate engaging, platform-specific content or import your existing posts.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="text-5xl font-bold text-[#5753f2]/10 absolute -top-6 -left-2">3</div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Schedule and analyze</h3>
              <p className="text-gray-600">
                Schedule posts at optimal times and track performance with detailed analytics across all your platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing Section */}
    {/* <div id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-['Bricolage_Grotesque'] text-black mb-4">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a solo creator or a large team, we have a plan that's right for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* Starter Plan */}
          {/* <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Starter</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold font-['Bricolage_Grotesque']">$9</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect 2 social accounts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>10 AI-generated posts/month</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic analytics</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-white text-[#5753f2] border border-[#5753f2] rounded-lg font-medium hover:bg-[#5753f2]/5 transition-colors">
              Get Started
            </button>
          </div>
           */}
          {/* Pro Plan */}
          {/* <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#5753f2] relative">
            <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
              <span className="bg-[#5753f2] text-white px-4 py-1 rounded-full text-sm font-medium">MOST POPULAR</span>
            </div>
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Professional</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold font-['Bricolage_Grotesque']">$29</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect 5 social accounts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>50 AI-generated posts/month</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Content calendar</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-[#5753f2] text-white rounded-lg font-medium hover:bg-[#4542e0] transition-colors">
              Get Started
            </button>
          </div>
           */}
          {/* Business Plan */}
          {/* <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold font-['Bricolage_Grotesque'] mb-2">Business</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold font-['Bricolage_Grotesque']">$79</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Connect 15 social accounts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited AI-generated posts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-white text-[#5753f2] border border-[#5753f2] rounded-lg font-medium hover:bg-[#5753f2]/5 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div> */}

    {/* Testimonials Section */}
    {/* <div id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-['Bricolage_Grotesque'] text-black mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their social media workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* Testimonial 1 */}
          {/* <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="mr-3 w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <h4 className="font-medium font-['Bricolage_Grotesque']">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Social Media Manager</p>
              </div>
            </div>
            <p className="text-gray-600">
              "gramo has completely transformed how I manage our company's social media presence. The AI-generated content is incredibly relevant and saves me hours each week."
            </p>
            <div className="flex mt-4 text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div> */}
          
          {/* Testimonial 2 */}
          {/* <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="mr-3 w-10 h-10 rounded-full bg-gray-300"></div>
              <div>
                <h4 className="font-medium font-['Bricolage_Grotesque']">Mark Taylor</h4>
                <p className="text-sm text-gray-500">Content Creator</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The cross-platform posting and analytics have given me insights I never had before. I've seen a 40% increase in engagement since I started using gramo."
            </p>
            <div className="flex mt-4 text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
             </div>
             </div>
             </div> */}
             {/* </div> */}
             {/* </div> */}
             </div>
  )
};

export default Home;