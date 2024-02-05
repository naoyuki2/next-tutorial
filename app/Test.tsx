import clsx from 'clsx';

type Status = 'red' | 'blue';

interface Props {
  status: Status;
}

export default function Test({ status }: Props) {
  return (
    <div
      className={clsx({
        'bg-red-100': status === 'red',
        'bg-blue-100': status === 'blue',
      })}
    >
      test
    </div>
  );
}
