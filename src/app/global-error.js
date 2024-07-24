'use client';

export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <div className="toast toast-top toast-center mt-[30px]">
          <div className="alert alert-error flex flex-col items-center justify-center gap-4">
            <span>{error.message}</span>
          </div>
        </div>
      </body>
    </html>
  );
}
