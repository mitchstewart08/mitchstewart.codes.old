import React from "react";
import Link from "next/link";

export const author = {
  name: 'Mitch Stewart',
  role: 'Full-Stack Developer',
  emailAddress: 'mitchell.stewart08@gmail.com',
  about: (
    <>
      <p>Hey, I&apos;m Mitch! 👋</p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida
        vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl
        vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida
        vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl
          vehicula vel. Nullam ut ex ut <Link href="" passHref><a>felis rhoncus</a></Link> convallis consectetur ac tellus.
      </p>
    </>
  )
}
