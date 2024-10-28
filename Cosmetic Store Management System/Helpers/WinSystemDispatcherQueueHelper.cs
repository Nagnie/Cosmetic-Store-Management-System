using Microsoft.UI.Dispatching;  // DispatcherQueue từ Microsoft.UI
using System;
using System.Runtime.InteropServices;

// Alias để tránh xung đột giữa các DispatcherQueue
using DispatcherQueueWinSystem = Windows.System.DispatcherQueue;

namespace Cosmetic_Store_Management_System.Helpers;

public class WinSystemDispatcherQueueHelper
{
    [DllImport("CoreMessaging.dll")]
    private static extern int CreateDispatcherQueueController(
        DispatcherQueueOptions options,
        out IntPtr dispatcherQueueController);

    private IntPtr m_dispatcherQueueController;

    public void EnsureWindowsSystemDispatcherQueueController()
    {
        // Kiểm tra nếu DispatcherQueue từ Windows.System đã tồn tại
        if (DispatcherQueueWinSystem.GetForCurrentThread() != null)
        {
            return;
        }

        DispatcherQueueOptions options;
        options.dwSize = Marshal.SizeOf(typeof(DispatcherQueueOptions));
        options.threadType = 2;    // DQTYPE_THREAD_CURRENT
        options.apartmentType = 2; // DQTAT_COM_STA

        CreateDispatcherQueueController(options, out m_dispatcherQueueController);
    }

    private struct DispatcherQueueOptions
    {
        internal int dwSize;
        internal int threadType;
        internal int apartmentType;
    }
}
