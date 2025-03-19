import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Chat | Chatbot Pluggin",
  description: "First Chat | Chatbot Pluggin",
};

export default function SignIn() {
  return <SignInForm />;
}
