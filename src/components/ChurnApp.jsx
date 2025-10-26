export default function ChurnApp() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        src="https://telco-churn-prediction-andrilaksono.streamlit.app/?embed=true"
        title="Churn Prediction App"
        className="w-[90%] h-[90%] rounded-2xl shadow-lg border"
      />
    </div>
  );
}
