import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';

interface AppProps {
  loading: boolean;
  label: string;
}

export default function Loading({loading = true, label = ""}: AppProps) {
  return loading ? (<LoadingOutlined spin />) : <span>{label}</span>;
}
