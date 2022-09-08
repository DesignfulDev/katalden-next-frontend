// https://stackoverflow.com/questions/60882627/using-dot-notation-with-functional-component

const CardRoot = ({ className, children }) => {
  const classes = 'bg-brand-white flex flex-col min-h-screen ';

  return <div className={classes + className}>{children}</div>;
};

const DetailsRoot = ({ className, children }) => {
  const classes = 'mb-6 ' + className;

  return <ul className={classes}>{children}</ul>;
};

const Item = ({ className, label, children }) => {
  const classes = 'flex justify-between py-1 ' + className;

  return (
    <li className={classes}>
      <span>{label}</span>
      <span className="font-normal uppercase">{children}</span>
    </li>
  );
};

const Description = ({ className, children }) => {
  const classes = '' + className;

  return <p className={classes}>{children}</p>;
};

const Details = Object.assign(DetailsRoot, { Item });

export const Card = Object.assign(CardRoot, { Details, Description });
