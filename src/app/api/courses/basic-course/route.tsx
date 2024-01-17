import fs from 'fs';
import path from 'path';

// export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {

  const filePath = path.join(process.cwd(), "data", "basicCourse.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return Response.json(data);
}
