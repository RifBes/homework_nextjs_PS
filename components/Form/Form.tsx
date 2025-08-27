"use client";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import styles from "./Form.module.css";
import { FormProps } from "./Form.props";
import { useForm } from "react-hook-form";

import cn from "classnames";
import { BASE_URL } from "@/constants";
import { useState } from "react";
import { IForm } from "./Form.interface";

export const Form = ({ id, className, ...props }: FormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IForm>();

    const [succes, setSucces] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onSubmit = async (data: IForm) => {
        // болванка, тк тру пост запрос не сделать
        try {
            const status = true;
            const res = await fetch(BASE_URL + "/posts/" + id, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    status,
                    data,
                }),
            });
            const json = await res.json();
            if (json.status) {
                setSucces(true);
                setError(false);
                reset();
            } else {
                setError(true);
            }
        } catch (error) {
            console.error(error);
            setSucces(false);
            setError(true);
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            {...props}
            aria-labelledby="form-title"
            className={cn(className, styles.form)}
        >
            <Input
                {...register("name", {
                    required: { value: true, message: "Заполните поле" },
                })}
                placeholder="Имя"
                type="text"
                name="name"
                error={errors.name}
            />
            <Textarea
                {...register("text", {
                    required: { value: true, message: "Заполните поле" },
                })}
                placeholder="Комментарий"
                name="text"
                error={errors.text}
            />
            <Button type="submit">Отправить</Button>
            {succes && <div>Комментарий отправлен на модерацию.</div>}
            {error && <div>Что-то пошло не так, обновите страницу.</div>}
        </form>
    );
};
