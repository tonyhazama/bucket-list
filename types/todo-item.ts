export default interface TodoItem {
  completed: boolean,
  _id: string;
  description: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}