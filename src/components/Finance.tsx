import React, { useState } from 'react';
import { 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  AlertCircle,
  CheckCircle,
  Plus,
  Download,
  Filter,
  Search
} from 'lucide-react';

const Finance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'invoices', label: 'Invoices' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'cashflow', label: 'Cash Flow' }
  ];

  const transactions = [
    { id: 1, type: 'income', description: 'Payment from ABC Corp', amount: 25000, date: '2024-01-15', status: 'completed', category: 'Sales' },
    { id: 2, type: 'expense', description: 'Office Supplies', amount: 3500, date: '2024-01-14', status: 'completed', category: 'Operations' },
    { id: 3, type: 'expense', description: 'Marketing Campaign', amount: 15000, date: '2024-01-13', status: 'pending', category: 'Marketing' },
    { id: 4, type: 'income', description: 'Consulting Services', amount: 45000, date: '2024-01-12', status: 'completed', category: 'Services' }
  ];

  const invoices = [
    { id: 'INV-001', client: 'TechCorp Ltd', amount: 85000, status: 'paid', dueDate: '2024-01-20', issueDate: '2024-01-05' },
    { id: 'INV-002', client: 'StartupXYZ', amount: 32000, status: 'pending', dueDate: '2024-01-25', issueDate: '2024-01-10' },
    { id: 'INV-003', client: 'Enterprise Co', amount: 125000, status: 'overdue', dueDate: '2024-01-15', issueDate: '2023-12-30' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+12.5%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Total Revenue
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹8,45,690
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/30">
              <CreditCard className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <span className="text-sm font-medium text-red-600">-5.2%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Total Expenses
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹3,21,450
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <DollarSign className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <span className="text-sm font-medium text-blue-600">+18.3%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Net Profit
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹5,24,240
          </p>
        </div>
      </div>

      {/* Cash Flow Chart Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Cash Flow Trends
        </h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Interactive cash flow chart will be displayed here</p>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">AI Financial Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Next Month Prediction</h4>
            <p className="text-blue-100 text-sm">Expected revenue: ₹9,50,000 (+12% growth)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Cost Optimization</h4>
            <p className="text-blue-100 text-sm">Potential savings: ₹18,500 through vendor optimization</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
          <Filter size={20} />
          Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Add Transaction
        </button>
      </div>

      {/* Transactions List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Transactions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${
                          transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            transaction.type === 'income' ? 'bg-green-600' : 'bg-red-600'
                          }`}></div>
                        </div>
                        <span className="text-gray-900 dark:text-white">{transaction.description}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{transaction.category}</td>
                    <td className="py-3 px-4">
                      <span className={`font-medium ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{transaction.date}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {transaction.status === 'completed' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInvoices = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Invoice Management
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <Download size={20} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            Generate Invoice
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Invoice ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Client</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Due Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{invoice.id}</td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white">{invoice.client}</td>
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">₹{invoice.amount.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{invoice.dueDate}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        invoice.status === 'paid' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : invoice.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Send
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'transactions':
        return renderTransactions();
      case 'invoices':
        return renderInvoices();
      case 'expenses':
        return <div className="text-center text-gray-500 py-12">Expenses management interface</div>;
      case 'cashflow':
        return <div className="text-center text-gray-500 py-12">Cash flow analysis interface</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Finance & Expense Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          AI-powered financial insights and automated expense tracking
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

export default Finance;