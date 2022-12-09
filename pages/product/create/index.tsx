import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "validationSchema";
import styles from "../../../styles/Login.module.css";
import { useState } from "react";
import axios from "axios";

interface FormValues {
  title: string;
  description: string;
  cost: number;
  image: File | null;
}

const Product = () => {
  const [imageSrc, setImageSrc] = useState<string>();
  const [uploadData, setUploadData] = useState<String>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: FormValues) => {
    const fileInput = document.querySelector("input[type=file]") as any;
    const formData = new FormData();
    const file: string | Blob = fileInput?.files![0];
    formData.append("file", file);
    formData.append("upload_preset", "my-uploads");

    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL}`, formData);

    console.log(data);

    reset({
      title: "",
      description: "",
      cost: 0,
    });
  };

  return (
    <div className={styles.AuthFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)} id="createForm">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create post</h3>
          <div className="form-group mt-3">
            <label>title</label>
            <input {...register("title")} type="text" className="form-control mt-1" placeholder="something" />
            {errors.title && <p className="text-danger mt-2">{errors.title.message}</p>}
          </div>
          <div className="form-group mt-3">
            <label>description</label>
            <input {...register("description")} type="text" className="form-control mt-1" placeholder="bla bla bla" />
            {errors.description && <p className="text-danger mt-2">{errors.description.message}</p>}
          </div>
          <div className="form-group mt-3">
            <label>cost</label>
            <input {...register("cost")} type="number" pattern="[0-9]{2}" min="0" className="form-control mt-1" placeholder="0" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} />
            {errors.cost && <p className="text-danger mt-2">{errors.cost.message}</p>}
          </div>
          <div className="form-group mt-3">
            <label>Image</label>
            <input {...register("image")} type="file" className="form-control mt-1" placeholder="upload image" />
            {errors.image && <p className="text-danger mt-2">{errors.image.message}</p>}
          </div>
          <input className="btn border p-2 mt-3 w-100" type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default Product;
