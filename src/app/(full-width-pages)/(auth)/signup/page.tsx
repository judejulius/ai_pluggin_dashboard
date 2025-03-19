import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Chat | Chatbot Pluggin",
  description: "First Chat | Chatbot Pluggin",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
