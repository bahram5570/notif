const RepoInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { children, ...rest } = props;

  return (
    <input {...rest} className="bg-blue-300 p-4">
      {children}
    </input>
  );
};

export default RepoInput;
