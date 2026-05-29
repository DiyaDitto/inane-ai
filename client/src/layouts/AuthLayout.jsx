function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      {children}
    </div>
  );
}

export default AuthLayout;