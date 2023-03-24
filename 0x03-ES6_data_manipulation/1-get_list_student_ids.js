export default function getListStudentIds(objs) {
  return objs instanceof Array ? objs.map((o) => o.id) : [];
}
