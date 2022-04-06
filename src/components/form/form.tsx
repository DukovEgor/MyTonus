import { PropsWithChildren, ReactNode } from 'react';

export default function Form({children}: PropsWithChildren<ReactNode>) {
  return (
    <Form>
      {children}
    </Form>
  );
}
