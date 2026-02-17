// login form

import { loginSchema, type LoginFormValues } from "@/schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", name: "" },
  });


  return {
    register,
    handleSubmit,
    errors,
    reset,
    isSubmitting,
  };
  // ...
}
