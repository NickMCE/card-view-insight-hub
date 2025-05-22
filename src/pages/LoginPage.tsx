
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password || !institution) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    
    // In a real app, you would authenticate with a backend here
    // For now, we'll just redirect to the dashboard
    toast({
      title: "Login successful",
      description: "Welcome to the Employee Dashboard",
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#7DD1BC]">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">welcome, Admin!</h1>
        </div>
        
        <div className="flex justify-center mb-8">
          <img
            src="/fox.png"
            alt="Fox Illustration"
            className="h-48 object-contain"
          />
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100/90"
          />
          
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100/90"
          />
          
          <Input
            type="text"
            placeholder="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full bg-gray-100/90"
          />
          
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              className="w-40 rounded-full bg-gray-200 hover:bg-gray-300 text-black"
            >
              login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
