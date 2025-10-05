// "use client"

// import { Outlet, Link, useLocation } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { ThemeToggle } from "@/components/theme-toggle"
// import NotificationDropdown from "@/components/ui/NotificationDropdown"
// import { LayoutDashboard, Users, BookOpen, BarChart3, LogOut, Menu } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function HeadLayout() {
//   const location = useLocation()
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const navigation = [
//     { name: "Dashboard", href: "/head/dashboard", icon: LayoutDashboard },
//     { name: "Students", href: "/head/students", icon: Users },
//     { name: "Teachers", href: "/head/teachers", icon: Users },
//     { name: "Grades", href: "/head/grades", icon: BookOpen },
//     { name: "Reports", href: "/head/reports", icon: BarChart3 },
//   ]

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setSidebarOpen(true)
//       } else {
//         setSidebarOpen(false)
//       }
//     }
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [sidebarOpen])

//   return (
//     <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
//       {/* Mobile sidebar backdrop */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-40 bg-gray-600 bg-transparent lg:hidden" onClick={() => setSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out `}
//       >
//         <div className="flex items-center justify-between h-16 px-4 bg-blue-600 shadow-md">
//           <div className="flex items-center space-x-3">
//             <img src="/assets/companylogo.jpg" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
//             <div className="text-white">
//               <div className="text-sm font-bold">DHFM COLLEGE</div>
//               <div className="text-xs opacity-75">Department Head Portal</div>
//             </div>
//           </div>
//           <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-blue-500 transition">
//             <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="white">
//               <g>
//                 <path d="M32.6,22.6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L38.8,26H44a2,2,0,0,0,0-4H38.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2Z" />
//                 <path d="M15.4,25.4a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L9.2,22H4a2,2,0,0,0,0,4H9.2L6.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2Z" />
//                 <path d="M26,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z" />
//                 <path d="M22,42V6a2,2,0,0,0-4,0V42a2,2,0,0,0,4,0Z" />
//               </g>
//             </svg>
//           </button>
//         </div>

//         <nav className="mt-8">
//           <div className="px-4 space-y-2">
//             {navigation.map((item) => {
//               const isActive = location.pathname === item.href
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                     isActive
//                       ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
//                       : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//                   }`}
//                   onClick={() => window.innerWidth <= 1024 && setSidebarOpen(false)}
//                 >
//                   <item.icon className="mr-3 h-5 w-5" />
//                   {item.name}
//                 </Link>
//               )
//             })}
//           </div>
//         </nav>

//         <div className="absolute bottom-0 w-full p-4">
//           <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-300">
//             <LogOut className="mr-3 h-5 w-5" />
//             Sign Out
//           </Button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className={`inset-0 w-full transition-all duration-300 ${sidebarOpen && window.innerWidth >= 1024 ? "ml-64" : "ml-0"}`}>
//         {/* Top bar */}
//         <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8">
//           <Button variant="ghost" size="icon" className="" onClick={() => setSidebarOpen(true)}>
//             {!sidebarOpen && <Menu className="h-6 w-6" />}
//           </Button>

//           <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
//             <div className="flex flex-1 items-center">
//               <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Department Head Portal</h1>
//             </div>
//             <div className="flex items-center gap-x-4 lg:gap-x-6">
//               <ThemeToggle />
//               <NotificationDropdown />
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm font-medium">DH</span>
//                 </div>
//                 <div className="hidden sm:block">
//                   <div className="text-sm font-medium text-gray-900 dark:text-white">Dr. Head</div>
//                   <div className="text-xs text-gray-500 dark:text-gray-400">Department Head</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page content */}
//         <main className="py-8">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }
"use client"
import { useNavigate } from "react-router-dom";

import { Outlet, Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import NotificationDropdown from "@/components/ui/NotificationDropdown"
import { LayoutDashboard, Users, BookOpen, BarChart3, LogOut, Menu } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeadLayout() {
  const navigate = useNavigate();

  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [listOpen, setListOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/head/dashboard", icon: LayoutDashboard },
    { name: "Students", href: "/head/students", icon: Users },
    { name: "Teachers", href: "/head/teachers", icon: Users },
    { name: "Grades", href: "/head/grades", icon: BookOpen },
    { name: "Reports", href: "/head/reports", icon: BarChart3 },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [sidebarOpen])

  function logout() {
    localStorage.removeItem("xy9a7b");
    navigate("/");
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-transparent lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out `}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-blue-600 shadow-md">
          <div className="flex items-center space-x-3">
            <img src="/assets/companylogo.jpg" alt="Logo" className="h-12 w-12 rounded-full object-cover" />
            <div className="text-white">
              <div className="text-sm font-bold">DHFM COLLEGE</div>
              <div className="text-xs opacity-75">Department Head Portal</div>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-blue-500 transition">
            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="white">
              <g>
                <path d="M32.6,22.6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L38.8,26H44a2,2,0,0,0,0-4H38.8l2.6-2.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2Z" />
                <path d="M15.4,25.4a1.9,1.9,0,0,0,0-2.8l-5.9-6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L9.2,22H4a2,2,0,0,0,0,4H9.2L6.6,28.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2Z" />
                <path d="M26,6V42a2,2,0,0,0,4,0V6a2,2,0,0,0-4,0Z" />
                <path d="M22,42V6a2,2,0,0,0-4,0V42a2,2,0,0,0,4,0Z" />
              </g>
            </svg>
          </button>
        </div>

        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => window.innerWidth <= 1024 && setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <Button variant="ghost" onClick={logout} className="w-full justify-start text-gray-600 dark:text-gray-300">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className={`inset-0 w-full transition-all duration-300 ${sidebarOpen && window.innerWidth >= 1024 ? "ml-64" : "ml-0"}`}>
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-x-6 sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="" onClick={() => setSidebarOpen(true)}>
            {!sidebarOpen && <Menu className="h-6 w-6" />}
          </Button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Department Head Portal</h1>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <ThemeToggle />
              <NotificationDropdown />
              <div className="flex items-center space-x-2">
                {!sidebarOpen && (
                  <div className="relative">
                    <div
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer"
                      onClick={() => setListOpen((prev) => !prev)}
                    >
                      <span className="text-white text-sm font-medium">DH</span>
                    </div>
                    {listOpen && (
                      <div className="absolute top-12 right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 z-50">
                        <div className="mb-2">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Dr. Head</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Department Head</div>
                        </div>
                        <Button className="w-full" onClick={logout}>
                          Logout
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                {sidebarOpen && (
                  <div className="lg:flex items-center gap-x-4 ml-2">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Dr. Head</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Department Head</div>
                    <Button onClick={logout}>Logout</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}