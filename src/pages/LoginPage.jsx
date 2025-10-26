import React from 'react';

// Reusable Social Login Button Component
const SocialButton = ({ provider, bgColor, textColor, icon, children }) => (
  <button
    type="button"
    className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold transition-transform transform hover:scale-105 ${bgColor} ${textColor}`}
  >
    {icon}
    <span className="ml-3">{children}</span>
  </button>
);

// Login Page Component
export default function LoginPage() {
  return (
    <div className="font-sans flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-block p-3 bg-primary rounded-xl mb-4">
            {/* Placeholder for Logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
              <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
              <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-dark-color">Qversity</h1>
          <p className="mt-2 text-gray-600">소셜 계정으로 간편하게 시작하세요</p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          <SocialButton 
            provider="Google" 
            bgColor="bg-white" 
            textColor="text-gray-700"
            icon={<span>G</span>} // Placeholder
          >
            Google 계정으로 시작
          </SocialButton>
          <SocialButton 
            provider="Kakao" 
            bgColor="bg-[#FEE500]" 
            textColor="text-[#3A1D1D]"
            icon={<span>K</span>} // Placeholder
          >
            Kakao 계정으로 시작
          </SocialButton>
          <SocialButton 
            provider="Naver" 
            bgColor="bg-[#03C75A]" 
            textColor="text-white"
            icon={<span>N</span>} // Placeholder
          >
            Naver 계정으로 시작
          </SocialButton>
        </div>

        <div className="text-xs text-center text-gray-500">
          로그인 시 <a href="#" className="underline">이용약관</a> 및 <a href="#" className="underline">개인정보처리방침</a>에 동의하는 것으로 간주합니다.
        </div>
      </div>
    </div>
  );
}