'use client';

import { BlackJackTable } from "./BlackJackTable";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function BlackJack({
}) {
  return (
    <div className="w-[100vw]">
      <div>
        <BlackJackTable />
        <ToastContainer/>
      </div>
    </div>
  )
}