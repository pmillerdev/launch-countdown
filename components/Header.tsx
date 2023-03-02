import React, { memo } from "react";

type HeaderProps = {
  message: string;
};

const Header = ({ message }: HeaderProps): JSX.Element => (
  <header className="mx-auto mt-2">
    <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-rose-500 font-bold text-center mx-auto ">
      {message}
    </h1>
  </header>
);

export default memo(Header);
