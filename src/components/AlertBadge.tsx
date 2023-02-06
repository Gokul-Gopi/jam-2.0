interface IAltertBadge {
  isExpand: boolean;
}
const AlertBadge = ({ isExpand }: IAltertBadge) => {
  return <span className="h-1 bg-red-500"></span>;
};

export default AlertBadge;
