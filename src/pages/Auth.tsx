import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, LogIn, UserPlus, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Auth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle, signInWithPhone, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if already logged in
  if (user) {
    navigate('/');
    return null;
  }

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message || "Failed to sign in with Google"
      });
    } else {
      toast({
        title: "Success!",
        description: "Signing in with Google..."
      });
    }
    setLoading(false);
  };

  const handlePhoneSignIn = async () => {
    if (!phone) {
      toast({
        variant: "destructive",
        title: "Phone number required",
        description: "Please enter your phone number"
      });
      return;
    }

    setLoading(true);
    const { error } = await signInWithPhone(phone);
    
    if (error) {
      toast({
        variant: "destructive",
        title: "Failed to send OTP",
        description: error.message || "Failed to send verification code"
      });
    } else {
      setShowOtpInput(true);
      toast({
        title: "OTP Sent!",
        description: "Please check your phone for the verification code"
      });
    }
    setLoading(false);
  };

  return (
    <>
      <title>Login & Signup - Doon Motors | Massey Ferguson Tractors</title>
      <meta name="description" content="Login or signup to access exclusive tractor deals and personalized service from Doon Motors, your trusted Massey Ferguson dealer." />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                className="mb-6"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Card>
                <CardHeader className="text-center">
                  <Badge className="mx-auto mb-4" variant="outline">
                    Welcome
                  </Badge>
                  <CardTitle className="text-2xl font-bold">
                    Login / Signup
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Access your account for exclusive deals and personalized service
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Google Sign In */}
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Continue with Google
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or
                      </span>
                    </div>
                  </div>

                  {/* Phone Sign In */}
                  {!showOtpInput ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone Number (Optional)
                        </label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          We'll send you a verification code via SMS
                        </p>
                      </div>
                      
                      <Button
                        className="w-full"
                        variant="outline"
                        size="lg"
                        onClick={handlePhoneSignIn}
                        disabled={loading || !phone}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Send Verification Code
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Verification Code
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter 6-digit code"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full"
                          maxLength={6}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Enter the code sent to {phone}
                        </p>
                      </div>
                      
                      <Button
                        className="w-full"
                        size="lg"
                        disabled={loading || otp.length !== 6}
                      >
                        <LogIn className="mr-2 h-4 w-4" />
                        Verify & Continue
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          setShowOtpInput(false);
                          setOtp('');
                        }}
                      >
                        Use different number
                      </Button>
                    </div>
                  )}

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mt-6 bg-gradient-to-r from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-center">Why Create an Account?</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Get personalized tractor recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Access exclusive deals and financing options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Track your service requests and purchases</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Get priority customer support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Auth;