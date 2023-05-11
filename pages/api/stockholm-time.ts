import { getStockholmTime } from '@/lib/getStockholmTime';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Awaited<ReturnType<typeof getStockholmTime>>;

export default async function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await getStockholmTime();
  res.status(200).json(response);
}