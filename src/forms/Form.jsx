import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  // yup is used for validation the form
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().min(18).required(),
    password: yup.string().min(6).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type={"text"}
        placeholder="Full Name..."
        {...register("fullName")}
      />
      {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
      <input type={"text"} placeholder="Email..." {...register("email")} />
      {errors.email?.message && <p>{errors.email?.message}</p>}

      <input type={"number"} placeholder="Age..." {...register("age")} />
      {errors.age?.message && <p>{errors.age?.message}</p>}

      <input
        type={"password"}
        placeholder="Password..."
        {...register("password")}
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}

      <input
        type={"password"}
        placeholder="Confirm password..."
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <p>{errors.confirmPassword?.message}</p>
      )}

      <input type={"submit"} />
    </form>
  );
};
