import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { AUTH_CONTENT } from "@/data/contents/auth-content";

export interface RegisterFormProps {
  data: typeof AUTH_CONTENT.register.forms;
}

export default function RegisterForm({ data }: RegisterFormProps) {
  return (
    <form id="metamask-register-form">
      <FieldGroup className="gap-4">
        {data.map(({ id, label, placeholder, type, required }, index) => (
          <Field key={index}>
            <FieldLabel className="gap-1">
              {label}
              <span className="text-danger">*</span>
            </FieldLabel>
            <Input
              id={id}
              placeholder={placeholder}
              required={required}
              type={type}
              className="bg-background focus-visible:ring-border h-10 rounded-lg text-sm focus-visible:ring-1"
            />
          </Field>
        ))}
      </FieldGroup>
    </form>
  );
}
