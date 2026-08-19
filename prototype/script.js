// Interactive State Flows for AI Prompt Engineering Prototypes

let currentOption = 'A'; // Tracks active demo option: 'A', 'B', or 'C'

// Helper: Show/Hide Overlays
function showOverlay(id, active = true) {
    const el = document.getElementById(id);
    if (el) {
        if (active) el.classList.add('active');
        else el.classList.remove('active');
    }
}

// Helper: Update State Badge in Header
function updateStateIndicator(text) {
    const badge = document.getElementById('state-indicator');
    if (badge) {
        badge.innerText = text;
    }
}

// Tab Switching Mechanism (Page 1 vs Page 2)
function switchTab(tabId) {
    const btnWorkspace = document.querySelector('.nav-tabs .tab-btn:nth-child(1)');
    const btnAnalytics = document.querySelector('.nav-tabs .tab-btn:nth-child(2)');
    const tabWorkspace = document.getElementById('tab-workspace');
    const tabAnalytics = document.getElementById('tab-analytics');

    if (tabId === 'workspace') {
        btnWorkspace?.classList.add('active');
        btnAnalytics?.classList.remove('active');
        tabWorkspace?.classList.remove('hidden');
        tabAnalytics?.classList.add('hidden');
    } else {
        btnWorkspace?.classList.remove('active');
        btnAnalytics?.classList.add('active');
        tabWorkspace?.classList.add('hidden');
        tabAnalytics?.classList.remove('hidden');
    }
}

// Simulated Evaluation Run
let isPromptOptimized = false;

function runEvaluation() {
    const consoleOutput = document.getElementById('console-output');
    updateStateIndicator("State 1.5: Running Evaluation...");

    setTimeout(() => {
        if (isPromptOptimized) {
            // Success State (Option C after applying suggestion)
            if (consoleOutput) {
                consoleOutput.innerHTML = `
                    <div class="console-log-row success">
                        [THÀNH CÔNG] Prompt được phân tách thành công dưới dạng JSON!<br>
                        Tốc độ xử lý: 0.85 giây | Tổng Token sử dụng: 142 tokens.<br><br>
                        <strong>Kết quả phân loại mẫu:</strong><br>
                        - TC_01: {"sentiment": "POSITIVE", "confidence": 0.98, "reason": "Sản phẩm dùng tốt, đóng gói kỹ"} -> PASSED<br>
                        - TC_02: {"sentiment": "NEGATIVE", "confidence": 0.95, "reason": "Giao hàng siêu chậm, thái độ tệ"} -> PASSED<br>
                        - TC_03: {"sentiment": "NEUTRAL", "confidence": 0.90, "reason": "Màu sắc tạm được, tạm ổn"} -> PASSED
                    </div>
                `;
            }
            updateStateIndicator("State 3: Prompt Optimized");
            updateAnalyticsToSuccess();
        } else {
            // Failure State (Initial state)
            if (consoleOutput) {
                consoleOutput.innerHTML = `
                    <div class="console-log-row error">
                        [LỖI PARSING] JSON.parse: Thất bại khi phân tách kết quả trả về của mô hình.<br>
                        Mô hình trả về: "Tôi nghĩ câu này thể hiện cảm xúc POSITIVE vì có từ tốt..."<br>
                        Lý do: Đầu ra là chuỗi văn bản tự do (Raw text), không khớp cấu trúc JSON yêu cầu ở Lab 04.
                    </div>
                `;
            }
            updateStateIndicator("State 1: Silent Struggle");

            // Option C: Trigger inline suggestion box when running error prompt
            if (currentOption === 'C') {
                const inlineHint = document.getElementById('inline-hint');
                if (inlineHint) {
                    inlineHint.style.display = 'flex';
                    updateStateIndicator("State 2: AI Suggestion Displayed");
                }
            }
        }
    }, 800);
}

// Option A: AI Support Radar Interactions
function triggerRadarChat() {
    const chat = document.getElementById('radar-chat');
    if (chat) {
        chat.classList.add('active');
        updateStateIndicator("State 2: AI Radar Triggered");
    }
}

function acceptTAHelp() {
    showOverlay('ta-overlay', true);
    document.getElementById('radar-chat')?.classList.remove('active');
    updateStateIndicator("State 3: TA Connected");
}

function declineTAHelp() {
    document.getElementById('radar-chat')?.classList.remove('active');
    updateStateIndicator("State 3: TA Help Declined");
}

function disconnectTA() {
    showOverlay('ta-overlay', false);
    updateStateIndicator("State 1: Silent Struggle");
}

// Option B: SOS Button Interactions
function triggerSOSModal() {
    showOverlay('sos-modal', true);
    updateStateIndicator("State 2: SOS Confirmation");
}

function confirmSOS() {
    showOverlay('sos-modal', false);
    showOverlay('sos-active-overlay', true);
    updateStateIndicator("State 3: SOS Queue Active");
}

function cancelSOS() {
    showOverlay('sos-active-overlay', false);
    updateStateIndicator("State 1: Silent Struggle");
}

// Option C: AI In-line Debugger Interactions
function applyHint() {
    const promptText = document.getElementById('prompt-text');
    if (promptText) {
        promptText.value = 
`Phân loại cảm xúc câu nhận xét này giúp tôi: "Sản phẩm dùng rất tốt, giao hàng nhanh". Nhớ phân loại đúng 3 nhãn POSITIVE, NEGATIVE, NEUTRAL nhé.

OUTPUT FORMAT: Return exactly a raw JSON object (no markdown code blocks):
{
  "sentiment": "POSITIVE" | "NEGATIVE" | "NEUTRAL",
  "confidence": float,
  "reason": "string"
}`;
    }

    isPromptOptimized = true;
    
    // Hide hint box
    const inlineHint = document.getElementById('inline-hint');
    if (inlineHint) inlineHint.style.display = 'none';

    // Rerun evaluation to show green success instantly
    runEvaluation();
}

function resetOptionC() {
    const promptText = document.getElementById('prompt-text');
    if (promptText) {
        promptText.value = 'Phân loại cảm xúc câu nhận xét này giúp tôi: "Sản phẩm dùng rất tốt, giao hàng nhanh". Nhớ phân loại đúng 3 nhãn POSITIVE, NEGATIVE, NEUTRAL nhé.';
    }
    
    isPromptOptimized = false;

    // Reset console log
    const consoleOutput = document.getElementById('console-output');
    if (consoleOutput) {
        consoleOutput.innerHTML = `
            <div class="console-log-row error">
                [LỖI PARSING] JSON.parse: Thất bại khi phân tách kết quả trả về của mô hình.<br>
                Mô hình trả về: "Câu này thể hiện cảm xúc POSITIVE vì khách hàng khen sản phẩm tốt và giao hàng nhanh."<br>
                Lý do: Kết quả không phải là JSON hợp lệ theo đặc tả yêu cầu của Lab 04.
            </div>
        `;
    }

    // Hide inline hint
    const inlineHint = document.getElementById('inline-hint');
    if (inlineHint) inlineHint.style.display = 'none';

    // Reset Tab 2 Analytics
    resetAnalytics();
    
    updateStateIndicator("State 1: Silent Struggle");
}

// Helper to update Tab 2 UI on success
function updateAnalyticsToSuccess() {
    const accuracyVal = document.getElementById('metric-accuracy');
    const accuracyBar = document.getElementById('fill-accuracy');
    const errorVal = document.getElementById('metric-error-rate');
    const errorBar = document.getElementById('fill-error-rate');
    const latencyVal = document.getElementById('metric-latency');
    const latencyBar = document.getElementById('fill-latency-bar');

    if (accuracyVal) {
        accuracyVal.innerText = '98%';
        accuracyVal.className = 'metric-value success';
    }
    if (accuracyBar) {
        accuracyBar.style.width = '98%';
        accuracyBar.className = 'progress-bar-fill success';
    }

    if (errorVal) {
        errorVal.innerText = '0%';
        errorVal.className = 'metric-value success';
    }
    if (errorBar) {
        errorBar.style.width = '0%';
        errorBar.className = 'progress-bar-fill success';
    }

    if (latencyVal) {
        latencyVal.innerText = '0.85s';
        latencyVal.className = 'metric-value success';
    }
    if (latencyBar) {
        latencyBar.style.width = '35%';
        latencyBar.className = 'progress-bar-fill success';
    }

    // Update table rows
    const tc1Output = document.getElementById('tc1-output');
    const tc1Badge = document.getElementById('tc1-badge');
    const tc2Output = document.getElementById('tc2-output');
    const tc2Badge = document.getElementById('tc2-badge');
    const tc3Output = document.getElementById('tc3-output');
    const tc3Badge = document.getElementById('tc3-badge');

    if (tc1Output) {
        tc1Output.innerText = '{"sentiment": "POSITIVE", "confidence": 0.98, "reason": "Sản phẩm dùng tốt"}';
        tc1Output.style.color = 'var(--success-color)';
    }
    if (tc1Badge) {
        tc1Badge.innerText = 'PASSED';
        tc1Badge.className = 'btn btn-primary';
        tc1Badge.style.backgroundColor = 'var(--success-color)';
    }

    if (tc2Output) {
        tc2Output.innerText = '{"sentiment": "NEGATIVE", "confidence": 0.95, "reason": "Giao hàng siêu chậm"}';
        tc2Output.style.color = 'var(--success-color)';
    }
    if (tc2Badge) {
        tc2Badge.innerText = 'PASSED';
        tc2Badge.className = 'btn btn-primary';
        tc2Badge.style.backgroundColor = 'var(--success-color)';
    }

    if (tc3Output) {
        tc3Output.innerText = '{"sentiment": "NEUTRAL", "confidence": 0.90, "reason": "Màu sắc tạm được"}';
        tc3Output.style.color = 'var(--success-color)';
    }
    if (tc3Badge) {
        tc3Badge.innerText = 'PASSED';
        tc3Badge.className = 'btn btn-primary';
        tc3Badge.style.backgroundColor = 'var(--success-color)';
    }
}

// Helper to reset Tab 2 UI
function resetAnalytics() {
    const accuracyVal = document.getElementById('metric-accuracy');
    const accuracyBar = document.getElementById('fill-accuracy');
    const errorVal = document.getElementById('metric-error-rate');
    const errorBar = document.getElementById('fill-error-rate');
    const latencyVal = document.getElementById('metric-latency');
    const latencyBar = document.getElementById('fill-latency-bar');

    if (accuracyVal) {
        accuracyVal.innerText = '35%';
        accuracyVal.className = 'metric-value error';
    }
    if (accuracyBar) {
        accuracyBar.style.width = '35%';
        accuracyBar.className = 'progress-bar-fill error';
    }

    if (errorVal) {
        errorVal.innerText = '100%';
        errorVal.className = 'metric-value error';
    }
    if (errorBar) {
        errorBar.style.width = '100%';
        errorBar.className = 'progress-bar-fill error';
    }

    if (latencyVal) {
        latencyVal.innerText = '1.85s';
        latencyVal.className = 'metric-value warning';
    }
    if (latencyBar) {
        latencyBar.style.width = '75%';
        latencyBar.className = 'progress-bar-fill error';
        latencyBar.style.backgroundColor = 'var(--warning-color)';
    }

    // Update table rows to failure
    const tc1Output = document.getElementById('tc1-output');
    const tc1Badge = document.getElementById('tc1-badge');
    const tc2Output = document.getElementById('tc2-output');
    const tc2Badge = document.getElementById('tc2-badge');
    const tc3Output = document.getElementById('tc3-output');
    const tc3Badge = document.getElementById('tc3-badge');

    if (tc1Output) {
        tc1Output.innerText = '"Cảm xúc là POSITIVE..."';
        tc1Output.style.color = 'var(--error-color)';
    }
    if (tc1Badge) {
        tc1Badge.innerText = 'FAILED';
        tc1Badge.className = 'btn btn-danger';
        tc1Badge.style.backgroundColor = '';
    }

    if (tc2Output) {
        tc2Output.innerText = '"Đây là NEGATIVE..."';
        tc2Output.style.color = 'var(--error-color)';
    }
    if (tc2Badge) {
        tc2Badge.innerText = 'FAILED';
        tc2Badge.className = 'btn btn-danger';
        tc2Badge.style.backgroundColor = '';
    }

    if (tc3Output) {
        tc3Output.innerText = '"Câu này NEUTRAL."';
        tc3Output.style.color = 'var(--error-color)';
    }
    if (tc3Badge) {
        tc3Badge.innerText = 'FAILED';
        tc3Badge.className = 'btn btn-danger';
        tc3Badge.style.backgroundColor = '';
    }
}

// Delayed trigger simulation for Option A (AI Support Radar)
let radarTimer = null;
function startRadarTimer() {
    if (radarTimer) clearTimeout(radarTimer);
    radarTimer = setTimeout(() => {
        if (currentOption === 'A') {
            triggerRadarChat();
        }
    }, 3000);
}

function switchOption(opt) {
    currentOption = opt;
    
    // Update switcher button active state
    const buttons = document.querySelectorAll('.switcher-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.switcher-btn[data-opt="${opt}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update Header Title
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        if (opt === 'A') {
            headerTitle.innerText = "AI Support Radar - Option A (TA-led Intervention)";
        } else if (opt === 'B') {
            headerTitle.innerText = "SOS Button - Option B (Learner-led Signal)";
        } else if (opt === 'C') {
            headerTitle.innerText = "AI In-line Debugger - Option C (Co-pilot Assistance)";
        }
    }

    // Show/Hide option-specific elements in HTML
    const optAEls = document.querySelectorAll('.opt-a-only');
    const optBEls = document.querySelectorAll('.opt-b-only');
    const optCEls = document.querySelectorAll('.opt-c-only');

    if (opt === 'A') {
        optAEls.forEach(el => el.style.display = '');
        optBEls.forEach(el => el.style.display = 'none');
        optCEls.forEach(el => el.style.display = 'none');
    } else if (opt === 'B') {
        optAEls.forEach(el => el.style.display = 'none');
        optBEls.forEach(el => el.style.display = '');
        optCEls.forEach(el => el.style.display = 'none');
    } else if (opt === 'C') {
        optAEls.forEach(el => el.style.display = 'none');
        optBEls.forEach(el => el.style.display = 'none');
        optCEls.forEach(el => el.style.display = '');
    }

    // Reset the state for the new option
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => overlay.classList.remove('active'));
    
    const chatWidget = document.getElementById('radar-chat');
    if (chatWidget) chatWidget.classList.remove('active');
    
    const inlineHint = document.getElementById('inline-hint');
    if (inlineHint) inlineHint.style.display = 'none';

    if (radarTimer) clearTimeout(radarTimer);

    if (opt === 'C') {
        resetOptionC();
    } else {
        const promptText = document.getElementById('prompt-text');
        if (promptText) {
            promptText.value = 'Phân loại cảm xúc câu nhận xét này giúp tôi: "Sản phẩm dùng rất tốt, giao hàng nhanh". Nhớ phân loại đúng 3 nhãn POSITIVE, NEGATIVE, NEUTRAL nhé.';
        }
        isPromptOptimized = false;
        resetAnalytics();
        
        const consoleOutput = document.getElementById('console-output');
        if (consoleOutput) {
            consoleOutput.innerHTML = `
                <div class="console-log-row error">
                    [LỖI PARSING] JSON.parse: Thất bại khi phân tách kết quả trả về của mô hình.<br>
                    Mô hình trả về: "Câu này thể hiện cảm xúc POSITIVE vì khách hàng khen sản phẩm tốt và giao hàng nhanh."<br>
                    Lý do: Kết quả không phải là JSON hợp lệ theo đặc tả yêu cầu của Lab 04.
                </div>
            `;
        }
        updateStateIndicator("State 1: Silent Struggle");
    }

    if (opt === 'A') {
        startRadarTimer();
    }
}

window.onload = () => {
    // Determine initial page/option context
    if (document.getElementById('option-switcher-container')) {
        // prototype.html -> initialize with Option A
        switchOption('A');
    } else {
        // Standalone page context
        if (document.getElementById('radar-chat')) {
            currentOption = 'A';
            startRadarTimer();
        } else if (document.getElementById('sos-modal')) {
            currentOption = 'B';
        } else if (document.getElementById('inline-hint')) {
            currentOption = 'C';
        }
    }
}
