function ErrorCard({
  message,
}) {
  return (
    <div className="bg-red-500/10 border border-red-500 p-5 rounded-xl">

      <h2 className="text-red-500 font-bold">
        Error
      </h2>

      <p className="text-white mt-2">
        {message}
      </p>

    </div>
  );
}

export default ErrorCard;