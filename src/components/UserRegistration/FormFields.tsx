import React from "react";
import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LabelInputContainer from "@/components/LabelInputContainer";
import { FormValues } from "@/schemas/FormSchema";

interface FieldProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  type?: string;
}

const FormFieldComponent: React.FC<FieldProps> = ({ control, name, label, placeholder, type = "text" }) => (
  <LabelInputContainer>
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label htmlFor={name}>{label}</Label>
          <FormControl>
            <Input id={name} placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </LabelInputContainer>
);

export const FirstNameField: React.FC<{ control: Control<FormValues> }> = ({ control }) => (
  <FormFieldComponent control={control} name="firstname" label="First name" placeholder="Nayan" />
);

export const LastNameField: React.FC<{ control: Control<FormValues> }> = ({ control }) => (
  <FormFieldComponent control={control} name="lastname" label="Last name" placeholder="Bamnote" />
);

export const EmailField: React.FC<{ control: Control<FormValues> }> = ({ control }) => (
  <FormFieldComponent control={control} name="email" label="Email Address" placeholder="nareshbamnote52@gmail.com" type="email" />
);

export const PasswordField: React.FC<{ control: Control<FormValues> }> = ({ control }) => (
  <FormFieldComponent control={control} name="password" label="Password" placeholder="••••••••" type="password" />
);

export const ConfirmPasswordField: React.FC<{ control: Control<FormValues> }> = ({ control }) => (
  <FormFieldComponent control={control} name="confirmpassword" label="Confirm Password" placeholder="••••••••" type="password" />
);