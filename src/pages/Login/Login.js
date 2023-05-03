import React from "react";
import styles from "./Login.module.css";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { authService } from "../../http/auth-services";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,   
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (values) => {
    const data = await authService.loginService(values);
    console.log("values>>>", data);
  };
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Войти аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          label="E-Mail"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", { required: "Укажите Почту" })}
          className={styles.field}
          fullWidth
        />
        <TextField
          type="password"
          label="Пароль"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Укажите пароль" })}
          className={styles.field}
          fullWidth
        />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
