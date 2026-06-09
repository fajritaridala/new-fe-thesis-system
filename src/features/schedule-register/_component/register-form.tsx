import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SCHEDULE_CONTENT } from "@/data/contents/schedule-content";

export default function ScheduleRegisterForm() {
  const { title, description, forms, cta } = SCHEDULE_CONTENT.register;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-bold lg:text-2xl">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="schedule-register-form">
          <FieldGroup>
            {forms.map((form, index) => (
              <Field key={index}>
                <FieldLabel className="gap-1">
                  {form.label}
                  <span className="text-danger">*</span>
                </FieldLabel>
                <Input
                  id={form.id}
                  placeholder={form.placeholder}
                  type={form.type}
                  required
                  className="bg-background focus-visible:ring-border h-10 rounded-lg text-sm focus-visible:ring-1"
                />
              </Field>
            ))}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type={cta.type}
          size="lg"
          form="schedule-register-form"
          className="w-full lg:mt-4"
        >
          {cta.label}
        </Button>
      </CardFooter>
    </Card>
  );
}
