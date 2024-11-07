import { comment } from "postcss";
import { comments } from "../data";
import { redirect } from "next/navigation";
//serach by id
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if(parseInt(params.id)>comments.length){
    redirect('/comments')
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

//edit by id
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const commentIndex = comments.findIndex(
    (e) => e.id === parseInt(params.id)

  );
  comments[commentIndex].text=text;
  return Response.json(comments[commentIndex]);
}

//delete by id
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndex = comments.findIndex(
    (e) => e.id === parseInt(params.id)
  );
  comments.splice(commentIndex, 1);
  return new Response(null, { status: 204 });
}