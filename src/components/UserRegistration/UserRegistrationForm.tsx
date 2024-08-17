"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, FormValues } from "@/schemas/FormSchema";
import { FirstNameField, LastNameField, EmailField, PasswordField, ConfirmPasswordField } from "./FormFields";

export default function UserRegistrationForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const formattedValues = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    toast({
      title: "Registration Successful",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{formattedValues}</code>
        </pre>
      ),
      duration: 5000,
    });
  };

  return (
    <div className="border-[#27272a] border-2 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-black">
      <h2 className="font-bold text-xl text-neutral-200 mb-6">
        User Registration
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FirstNameField control={form.control} />
            <LastNameField control={form.control} />
          </div>
          <EmailField control={form.control} />
          <PasswordField control={form.control} />
          <ConfirmPasswordField control={form.control} />
          <Button
            className="w-full bg-gradient-to-br from-zinc-900 to-zinc-900 text-white font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}