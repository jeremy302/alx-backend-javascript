export default function* createIteratorObject(report) {
	for (const department in report.allEmployees)
	{
		for (const name of report.allEmployees[department])
		{
			yield name;
		}
	}
}
