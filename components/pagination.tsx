import React from 'react'

interface Props {
  onChangePage: (page: number) => void;
  totalData: number;
  size: number;
  currentPage: number;
}

export default function Pagination({totalData = 0, size = 0, onChangePage, currentPage = 0}: Props) {

  const pageNum = Math.ceil(totalData/size);

  return (
    <div className="mb-8">
      <div className="flex justify-center flex-wrap">
        {[...Array(pageNum)].map((e, i) => (
          <div key={i} className={"cursor-pointer py-2 px-4 border-thin mr-2 mb-2 rounded-md " + (currentPage === i ? "bg-main-accent text-white" : "")} onClick={() => onChangePage(i)}>{i+1}</div>
        ))}
      </div>
    </div>
  )
}
