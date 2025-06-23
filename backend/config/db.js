import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.error("Falha na conexão com o MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}