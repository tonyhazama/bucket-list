import React from 'react';
import Link from "next/link";
import {RiArrowLeftSLine} from 'react-icons/ri';

interface Props {
  onBack: () => void;
  title?: string;
}

export default function BackButton({onBack, title = "Back"}: Props) {
  return (
    <div className="flex items-center mb-4 cursor-pointer" style={{width: "fit-content"}} onClick={onBack}>
      <RiArrowLeftSLine className="mr-4 cursor-pointer text-2xl" />
      <div className="font-semibold">{title}</div>
    </div>
  )
}
