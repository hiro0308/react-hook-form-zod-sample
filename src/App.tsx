import { useForm } from "react-hook-form";
import { Schema, schema } from "./types/schema";

import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<Schema>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
    resolver: zodResolver(schema, { async: true }),
  });

  // console.log(errors);

  const onSubmit = (data: Schema) => {
    console.log("submit");
    console.log(data);
  };

  // console.log(useForm());
  // console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>
      <input type="age" {...register("age")} placeholder="age" />
      <p>{errors.age?.message}</p>
      <select {...register("prefecture")}>
        <option value="">選択してね</option>
        <option value="北海道">北海道</option>
        <option value="東京">東京</option>
      </select>
      <p>{errors.prefecture?.message}</p>
      <input type="checkbox" {...register("policy")} />
      チェックボックス
      <p>{errors.policy?.message}</p>
      <input type="submit" value="送信する" />
    </form>
  );
}

export default App;
