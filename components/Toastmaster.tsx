type ToastmasterProps = {
    name: string;
    phone: string;
    email: string;
  };
  
  export default function Toastmaster({ name, phone, email }: ToastmasterProps) {
    return (
      <section className="max-w-xl mx-auto px-4 mt-12 mb-10 text-center">
        <h2 className="font-serif text-lg md:text-xl mb-4">
          Ønsker du å holde tale?
        </h2>
        <p className="mb-4 font-sans">Ta kontakt med toastmaster {name}:</p>
        <p className="font-sans font-medium">tlf: {phone}</p>
        <p className="font-sans">e-post: {email}</p>
      </section>
    );
  }