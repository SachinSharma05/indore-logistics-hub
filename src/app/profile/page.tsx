import { requireAuth } from "@/lib/auth";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
  const user = await requireAuth();

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <ProfileForm user={user} />
      </div>
    </div>
  );
}