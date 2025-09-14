import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Filter,
  PieChart,
  LineChart,
  Activity,
  FileText,
  DollarSign,
  Users,
  ShoppingCart
} from 'lucide-react';

const Reports: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'financial', label: 'Financial' },
    { id: 'sales', label: 'Sales' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'custom', label: 'Custom Reports' }
  ];

  const reportCards = [
    {
      title: 'Monthly P&L Report',
      description: 'Comprehensive profit and loss statement',
      type: 'Financial',
      lastUpdated: '2 hours ago',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Sales Performance',
      description: 'Detailed sales metrics and trends',
      type: 'Sales',
      lastUpdated: '4 hours ago',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Marketing ROI Analysis',
      description: 'Campaign performance and ROI metrics',
      type: 'Marketing',
      lastUpdated: '6 hours ago',
      icon: Activity,
      color: 'purple'
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior and lifetime value',
      type: 'Customer',
      lastUpdated: '1 day ago',
      icon: Users,
      color: 'orange'
    }
  ];

  const kpiMetrics = [
    { label: 'Revenue Growth', value: '+15.2%', trend: 'up', color: 'green' },
    { label: 'Customer Acquisition Cost', value: '₹1,245', trend: 'down', color: 'blue' },
    { label: 'Average Order Value', value: '₹3,450', trend: 'up', color: 'purple' },
    { label: 'Customer Retention Rate', value: '87%', trend: 'up', color: 'orange' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${metric.color}-50 dark:bg-${metric.color}-900/30`}>
                <BarChart3 className={`text-${metric.color}-600 dark:text-${metric.color}-400`} size={24} />
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp 
                  className={`${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} ${
                    metric.trend === 'down' ? 'rotate-180' : ''
                  }`} 
                  size={16} 
                />
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.value}
                </span>
              </div>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
              {metric.label}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Revenue Trends
            </h3>
            <div className="flex items-center gap-2">
              <LineChart className="text-blue-600" size={20} />
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Interactive revenue chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Sales Distribution
            </h3>
            <div className="flex items-center gap-2">
              <PieChart className="text-purple-600" size={20} />
            </div>
          </div>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Interactive sales distribution chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Quick Reports */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Reports
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FileText size={20} />
            Create Custom Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportCards.map((report, index) => {
            const Icon = report.icon;
            return (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${report.color}-50 dark:bg-${report.color}-900/30`}>
                      <Icon className={`text-${report.color}-600 dark:text-${report.color}-400`} size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{report.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{report.description}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Download size={18} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-${report.color}-100 text-${report.color}-800 dark:bg-${report.color}-900/30 dark:text-${report.color}-400`}>
                    {report.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {report.lastUpdated}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">AI-Powered Business Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Revenue Prediction</h4>
            <p className="text-blue-100 text-sm">
              Based on current trends, expect ₹3.2M revenue next quarter (+18% growth).
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Cost Optimization</h4>
            <p className="text-blue-100 text-sm">
              Marketing efficiency can be improved by 25% by reallocating budget to high-ROI campaigns.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Customer Insights</h4>
            <p className="text-blue-100 text-sm">
              VIP customers generate 40% of revenue. Focus retention efforts on this segment.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Market Opportunity</h4>
            <p className="text-blue-100 text-sm">
              Untapped market in tier-2 cities shows 65% potential for business expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFinancial = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Financial Reports
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar size={20} />
            Date Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={20} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={20} />
            Export
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Profit & Loss
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Revenue</span>
              <span className="font-medium text-green-600">₹8,45,690</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Expenses</span>
              <span className="font-medium text-red-600">₹3,21,450</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Net Profit</span>
                <span className="font-bold text-green-600">₹5,24,240</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Cash Flow
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Inflow</span>
              <span className="font-medium text-green-600">₹9,15,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Outflow</span>
              <span className="font-medium text-red-600">₹4,68,000</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Net Cash Flow</span>
                <span className="font-bold text-green-600">₹4,47,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Balance Sheet
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Assets</span>
              <span className="font-medium text-blue-600">₹25,75,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Liabilities</span>
              <span className="font-medium text-orange-600">₹8,25,000</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Net Worth</span>
                <span className="font-bold text-blue-600">₹17,50,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Revenue vs Expenses
          </h4>
          <div className="h-64 bg-gradient-to-br from-green-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Revenue vs Expenses comparison chart</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Cash Flow Forecast
          </h4>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Cash flow prediction chart</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'financial':
        return renderFinancial();
      case 'sales':
        return <div className="text-center text-gray-500 py-12">Sales reports and analytics</div>;
      case 'marketing':
        return <div className="text-center text-gray-500 py-12">Marketing performance reports</div>;
      case 'custom':
        return <div className="text-center text-gray-500 py-12">Custom report builder</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Reports & Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive business insights with AI-powered analytics and forecasting
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Reports;