// "use client";

// import { api } from "../../../trpc/react";

// export default function DeleteMessagePage() {
//     const utils = api.useUtils();

//     const deletePost = api.post.delete.useMutation({
//         onSuccess: async () => {
//             await utils.post.all.invalidate();
//         },
//     });

//     const handleDelete = (postId) => {
//         deletePost.mutate({ id: postId });
//     };

//     const { data: posts } = api.post.all.useQuery();

//     return (
//         <div className="p-5">
//             <h1 className="text-xl font-bold mb-4">Delete Messages</h1>
//             <div>
//                 {posts?.map((post) => (
//                     <div
//                         key={post.id}
//                         className="flex justify-between items-center p-2 border-b"
//                     >
//                         <span>{post.content}</span>
//                         <button
//                             onClick={() => handleDelete(post.id)}
//                             className="text-red-500"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
