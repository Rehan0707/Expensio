import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  AlertTriangle,
  Plus,
  Send,
  Zap,
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const kpiCards = [
    {
      title: 'Monthly Revenue',
      value: '₹2,84,560',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Total Expenses',
      value: '₹1,67,890',
      change: '-5.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'Active Employees',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Customer Orders',
      value: '1,247',
      change: '+18.3%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'purple'
    }
  ];

  const quickActions = [
    { label: 'Generate Invoice', icon: Plus, color: 'blue' },
    { label: 'Pay Salary', icon: DollarSign, color: 'green' },
    { label: 'Launch Campaign', icon: Send, color: 'purple' },
    { label: 'Add Offer', icon: Target, color: 'orange' },
    { label: 'View Reports', icon: BarChart3, color: 'indigo' },
    { label: 'Schedule Task', icon: Calendar, color: 'pink' }
  ];

  const alerts = [
    { type: 'warning', message: 'GST filing due in 3 days', time: '2 hours ago' },
    { type: 'info', message: 'New marketing campaign performance report ready', time: '5 hours ago' },
    { type: 'success', message: 'Monthly payroll completed successfully', time: '1 day ago' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your business performance and take quick actions
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${kpi.color}-50 dark:bg-${kpi.color}-900/30`}>
                  <Icon className={`text-${kpi.color}-600 dark:text-${kpi.color}-400`} size={24} />
                </div>
                <div className="flex items-center gap-1">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="text-green-500" size={16} />
                  ) : (
                    <TrendingDown className="text-red-500" size={16} />
                  )}
                  <span className={`text-sm font-medium ${
                    kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
                {kpi.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {kpi.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`flex flex-col items-center p-4 rounded-lg bg-${action.color}-50 dark:bg-${action.color}-900/30 hover:bg-${action.color}-100 dark:hover:bg-${action.color}-900/50 transition-colors duration-200 group`}
              >
                <Icon className={`text-${action.color}-600 dark:text-${action.color}-400 mb-2 group-hover:scale-110 transition-transform duration-200`} size={24} />
                <span className={`text-sm font-medium text-${action.color}-700 dark:text-${action.color}-300 text-center`}>
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Invoice #INV-2024-001 generated', time: '10 minutes ago', type: 'invoice' },
              { action: 'Marketing campaign "Diwali Sale" launched', time: '1 hour ago', type: 'marketing' },
              { action: 'Employee John Doe checked in', time: '2 hours ago', type: 'hr' },
              { action: 'Payment of ₹15,000 received from ABC Corp', time: '3 hours ago', type: 'finance' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'invoice' ? 'bg-blue-500' :
                  activity.type === 'marketing' ? 'bg-purple-500' :
                  activity.type === 'hr' ? 'bg-green-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Alerts & Notifications
          </h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${
                alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20' :
                alert.type === 'info' ? 'bg-blue-50 border-blue-400 dark:bg-blue-900/20' :
                'bg-green-50 border-green-400 dark:bg-green-900/20'
              }`}>
                <AlertTriangle className={`${
                  alert.type === 'warning' ? 'text-yellow-600' :
                  alert.type === 'info' ? 'text-blue-600' : 'text-green-600'
                } flex-shrink-0`} size={20} />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    alert.type === 'warning' ? 'text-yellow-800 dark:text-yellow-200' :
                    alert.type === 'info' ? 'text-blue-800 dark:text-blue-200' :
                    'text-green-800 dark:text-green-200'
                  }`}>
                    {alert.message}
                  </p>
                  <p className={`text-xs mt-1 ${
                    alert.type === 'warning' ? 'text-yellow-600 dark:text-yellow-400' :
                    alert.type === 'info' ? 'text-blue-600 dark:text-blue-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-yellow-300" size={24} />
          <h2 className="text-xl font-semibold">AI-Powered Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Cash Flow Prediction</h3>
            <p className="text-purple-100 text-sm">
              Based on current trends, expect 15% revenue growth next month. Consider increasing marketing spend by ₹25,000.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Cost Optimization</h3>
            <p className="text-purple-100 text-sm">
              Vendor payment optimization can save ₹8,500 monthly. Switch to net-30 terms with top 3 suppliers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;