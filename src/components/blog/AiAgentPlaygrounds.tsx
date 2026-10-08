"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = 'vi' | 'en';

type Level = {
	id: number;
	name: { vi: string; en: string };
	tag: { vi: string; en: string };
	what: { vi: string; en: string };
	value: { vi: string; en: string };
	risk: { vi: string; en: string };
	kpi: { vi: string; en: string };
	tools: string[];
};

const levels: Level[] = [
	{
		id: 1,
		name: { vi: 'Công cụ cá nhân', en: 'Personal tool' },
		tag: { vi: 'Nhanh hơn nhưng phân tán', en: 'Faster but scattered' },
		what: { vi: 'Nhân sự dùng AI để viết, dịch, tóm tắt, phân tích sơ bộ.', en: 'Employees use AI to write, translate, summarize and draft analysis.' },
		value: { vi: 'Tăng năng suất cá nhân.', en: 'Personal productivity lift.' },
		risk: { vi: 'Khó đo lường, khó chuẩn hóa, phụ thuộc kỹ năng prompt.', en: 'Hard to measure, hard to standardize, prompt-skill dependent.' },
		kpi: { vi: 'Giờ tiết kiệm/người/tuần', en: 'Hours saved/person/week' },
		tools: ['ChatGPT', 'Claude', 'Gemini', 'Spreadsheet AI'],
	},
	{
		id: 2,
		name: { vi: 'Assistant phòng ban', en: 'Department assistant' },
		tag: { vi: 'Có ngữ cảnh chức năng', en: 'Functional context' },
		what: { vi: 'Sales, Marketing, HR, Finance có trợ lý theo tri thức và template riêng.', en: 'Sales, Marketing, HR and Finance assistants use function-specific knowledge and templates.' },
		value: { vi: 'Giảm việc lặp lại, nâng chất lượng đầu ra.', en: 'Less repetitive work, higher output quality.' },
		risk: { vi: 'Vẫn cần người chuyển gợi ý thành hành động.', en: 'Humans still turn suggestions into actions.' },
		kpi: { vi: 'Tỷ lệ tái sử dụng template / chất lượng đầu ra', en: 'Template reuse / output quality' },
		tools: ['Knowledge base', 'RAG', 'Prompt template', 'Internal chatbot'],
	},
	{
		id: 3,
		name: { vi: 'Workflow AI', en: 'Workflow AI' },
		tag: { vi: 'AI đi vào quy trình', en: 'AI enters the process' },
		what: { vi: 'AI nhận trigger, lấy dữ liệu, tạo đầu ra nháp, cập nhật trạng thái.', en: 'AI receives triggers, retrieves data, drafts outputs and updates status.' },
		value: { vi: 'Rút ngắn thời gian xử lý, giảm lỗi thao tác.', en: 'Shorter cycle time, fewer handoff errors.' },
		risk: { vi: 'Nếu dữ liệu và quy trình mơ hồ, workflow sẽ tạo demo đẹp nhưng khó chạy thật.', en: 'Unclear data and process create nice demos that fail in daily operations.' },
		kpi: { vi: 'Cycle time, tỷ lệ lỗi, SLA phản hồi', en: 'Cycle time, error rate, response SLA' },
		tools: ['Dify', 'n8n', 'Zapier', 'CRM API', 'Document retrieval'],
	},
	{
		id: 4,
		name: { vi: 'Agent có giám sát', en: 'Supervised agent' },
		tag: { vi: 'Có mục tiêu + quyền thực thi', en: 'Goal + execution rights' },
		what: { vi: 'Agent đề xuất bước tiếp theo, tạo báo giá nháp, nhắc follow-up, ghi CRM.', en: 'The agent proposes next steps, drafts quotes, reminds follow-up and writes to CRM.' },
		value: { vi: 'AI làm nhanh, con người kiểm soát điểm rủi ro.', en: 'AI moves fast while humans control high-risk decisions.' },
		risk: { vi: 'Thiếu guardrail sẽ tạo rủi ro thương mại, dữ liệu và trách nhiệm.', en: 'Weak guardrails create commercial, data and accountability risk.' },
		kpi: { vi: 'Tỷ lệ đề xuất được duyệt, thời gian phê duyệt', en: 'Approval rate, approval time' },
		tools: ['Tool calling', 'Approval workflow', 'Audit log', 'RBAC'],
	},
	{
		id: 5,
		name: { vi: 'Agent Platform', en: 'Agent platform' },
		tag: { vi: 'Năng lực vận hành chung', en: 'Shared operating capability' },
		what: { vi: 'Một lớp AI kết nối CRM, ERP, dashboard, kho tri thức và dữ liệu khách hàng.', en: 'An AI layer connected to CRM, ERP, dashboards, knowledge bases and customer data.' },
		value: { vi: 'Tổ chức học nhanh hơn, phối hợp tốt hơn, phục vụ khách hàng nhanh hơn.', en: 'A faster-learning, better-coordinated and more responsive organization.' },
		risk: { vi: 'Cần kiến trúc dữ liệu, phân quyền, observability và governance rõ.', en: 'Requires strong data architecture, access control, observability and governance.' },
		kpi: { vi: 'Tốc độ ra quyết định, adoption, ROI theo quy trình', en: 'Decision speed, adoption, workflow ROI' },
		tools: ['Enterprise AI platform', 'Vector DB', 'SSO/RBAC', 'Observability'],
	},
];

const quoteAutomationStages = {
	vi: [
		{ name: 'Lead vào hệ thống', time: '00:00', owner: 'Form / Zalo / Website', action: 'Khách hàng gửi kích thước cửa, ảnh hiện trạng, khu vực và mức ngân sách mong muốn.', output: 'Một opportunity mới được tạo trong CRM với trạng thái “cần tư vấn”.', control: 'Kiểm tra spam, thiếu ảnh hoặc thông tin bắt buộc.' },
		{ name: 'Agent đọc dữ liệu', time: '00:08', owner: 'AI Agent', action: 'Agent nhận trigger, đọc catalog sản phẩm, bảng giá, tồn kho, chính sách đại lý và lịch sử khách hàng.', output: 'Bộ dữ liệu tư vấn đã được gom vào một context có nguồn trích dẫn.', control: 'Chỉ lấy dữ liệu từ nguồn được phép; không tự bịa giá.' },
		{ name: 'Tư vấn phương án', time: '00:22', owner: 'AI Agent', action: 'Agent so khớp nhu cầu với nhóm sản phẩm, giải thích lý do chọn và nêu các câu hỏi còn thiếu.', output: '2–3 phương án đề xuất theo ngân sách, độ an toàn, thẩm mỹ và điều kiện thi công.', control: 'Nếu thiếu kích thước hoặc ảnh, agent hỏi lại thay vì báo giá ngay.' },
		{ name: 'Tạo báo giá nháp', time: '00:38', owner: 'AI + Pricing rule', action: 'Agent áp dụng quy tắc giá, phụ kiện, phí khảo sát/lắp đặt và điều kiện chiết khấu được phép.', output: 'Báo giá nháp gồm hạng mục, số lượng, đơn giá, ghi chú kỹ thuật và thời hạn hiệu lực.', control: 'Giá vượt ngưỡng hoặc chiết khấu đặc biệt bị khóa để chờ duyệt.' },
		{ name: 'Gửi duyệt nhanh', time: '00:50', owner: 'Sales / Đại lý', action: 'Sales nhận thông báo, xem lý do đề xuất, chỉnh điều khoản nếu cần và bấm duyệt.', output: 'Báo giá được chuyển từ “draft” sang “approved”.', control: 'Human-in-the-loop chịu trách nhiệm cuối cùng trước khi gửi khách.' },
		{ name: 'Gửi khách & follow-up', time: '01:00', owner: 'CRM Automation', action: 'Hệ thống gửi báo giá qua kênh phù hợp, tạo lịch nhắc follow-up và ghi nhận phản hồi.', output: 'Khách nhận báo giá trong khoảng 60 giây; CRM có log đầy đủ để đo conversion.', control: 'Mọi bước có audit log để học lại và cải tiến quy trình.' },
	],
	en: [
		{ name: 'Lead enters system', time: '00:00', owner: 'Form / chat / website', action: 'The customer submits door size, site photos, location and budget range.', output: 'A new CRM opportunity is created with “needs advisory” status.', control: 'Check spam, missing photos or required fields.' },
		{ name: 'Agent reads data', time: '00:08', owner: 'AI Agent', action: 'The agent is triggered and reads product catalog, price rules, inventory, dealer policy and customer history.', output: 'A sourced advisory context is assembled.', control: 'Use only approved data sources; never invent prices.' },
		{ name: 'Recommend options', time: '00:22', owner: 'AI Agent', action: 'The agent matches the need to product groups, explains the rationale and asks for missing details.', output: '2–3 recommended options by budget, safety, design and installation conditions.', control: 'If size or photos are missing, ask follow-up questions before quoting.' },
		{ name: 'Draft quotation', time: '00:38', owner: 'AI + pricing rules', action: 'The agent applies pricing, accessories, survey/installation fees and allowed discount rules.', output: 'A draft quote with items, quantity, unit price, technical notes and validity period.', control: 'Out-of-policy prices or special discounts are locked for approval.' },
		{ name: 'Fast approval', time: '00:50', owner: 'Sales / dealer', action: 'Sales receives an alert, reviews the recommendation rationale, adjusts terms if needed and approves.', output: 'The quote moves from draft to approved.', control: 'Human-in-the-loop remains accountable before sending to the customer.' },
		{ name: 'Send & follow up', time: '01:00', owner: 'CRM automation', action: 'The system sends the quote through the right channel, schedules follow-up and records response.', output: 'The customer receives a quote in about 60 seconds; CRM has a full conversion log.', control: 'Every step has audit logs for learning and improvement.' },
	],
};

const useCases = {
	vi: [
		{ area: 'Sales', pain: 'Lead vào nhiều nhưng phản hồi chậm', pilot: 'Agent phân loại lead, gợi ý bước tiếp theo và tạo báo giá nháp.', metric: 'Giảm 30–50% thời gian phản hồi' },
		{ area: 'CSKH', pain: 'Câu trả lời không đồng nhất giữa nhân sự', pilot: 'Assistant truy xuất chính sách, lịch sử khách hàng và checklist xử lý.', metric: 'Tăng tỷ lệ xử lý lần đầu' },
		{ area: 'Vận hành', pain: 'Báo cáo tuần thủ công, chậm và thiếu chuẩn', pilot: 'Workflow AI tổng hợp dữ liệu, phát hiện điểm nghẽn và tạo bản nháp báo cáo.', metric: 'Giảm giờ làm báo cáo mỗi tuần' },
		{ area: 'HR', pain: 'Onboarding phụ thuộc người hướng dẫn', pilot: 'HR assistant trả lời quy trình, tài liệu và checklist 30 ngày đầu.', metric: 'Rút ngắn thời gian nhân sự đạt năng suất' },
	],
	en: [
		{ area: 'Sales', pain: 'Many leads, slow response', pilot: 'Agent qualifies leads, recommends next steps and drafts quotes.', metric: '30–50% shorter response time' },
		{ area: 'Customer service', pain: 'Answers vary across people', pilot: 'Assistant retrieves policies, customer history and resolution checklists.', metric: 'Higher first-contact resolution' },
		{ area: 'Operations', pain: 'Weekly reporting is manual, slow and inconsistent', pilot: 'Workflow AI consolidates data, flags bottlenecks and drafts reports.', metric: 'Fewer reporting hours per week' },
		{ area: 'HR', pain: 'Onboarding depends too much on each mentor', pilot: 'HR assistant answers process questions, documents and first-30-day checklists.', metric: 'Shorter time-to-productivity' },
	],
};

const dict = {
	vi: {
		maturityTitle: 'Chơi thử khung 5 cấp độ',
		maturityLead: 'Kéo cấp độ để thấy AI thay đổi từ công cụ cá nhân thành năng lực vận hành có quản trị.',
		value: 'Giá trị tạo ra',
		risk: 'Rủi ro cần kiểm soát',
		kpi: 'Chỉ số nên đo',
		stack: 'Mảnh ghép công nghệ',
		workflowTitle: 'Mô phỏng một workflow AI bán hàng',
		workflowLead: 'Bấm từng bước để thấy khác biệt giữa chatbot trả lời và Agent có quyền hành động trong quy trình.',
		quoteTitle: 'Giả lập AI Agent tư vấn và tạo báo giá tự động',
		quoteLead: 'Bấm “chạy tự động” để xem một yêu cầu khách hàng đi từ lead mới tới báo giá được duyệt và follow-up trong khoảng 60 giây vận hành.',
		quoteStart: 'Chạy tự động',
		quotePause: 'Tạm dừng',
		quoteReset: 'Chạy lại',
		quoteAction: 'Agent làm gì',
		quoteOutput: 'Đầu ra',
		quoteControl: 'Guardrail',
		quoteOwner: 'Chủ thể',
		useCaseTitle: 'Chọn “điểm bắt đầu 90 ngày”',
		useCaseLead: 'Chọn phòng ban để biến ý tưởng AI thành một pilot nhỏ, lặp lại và đo được.',
		pain: 'Điểm nghẽn',
		pilot: 'Pilot nên làm',
		metric: 'Thước đo thành công',
		steps: ['Nhận nhu cầu', 'Truy xuất dữ liệu', 'Gợi ý phương án', 'Tạo báo giá nháp', 'Chờ duyệt', 'Ghi nhận CRM'],
		stepNotes: ['Khách hàng mô tả nhu cầu qua form/chat.', 'Agent lấy catalog, chính sách giá và lịch sử khách hàng.', 'Agent chọn nhóm sản phẩm và lý do tư vấn.', 'Agent tạo bản nháp để sales kiểm tra.', 'Con người duyệt giá/điều khoản rủi ro.', 'Kết quả được lưu lại để học và follow-up.'],
	},
	en: {
		maturityTitle: 'Explore the 5-level maturity model',
		maturityLead: 'Move the level to see AI evolve from a personal tool into a governed operating capability.',
		value: 'Value created',
		risk: 'Risk to control',
		kpi: 'Metric to track',
		stack: 'Technology building blocks',
		workflowTitle: 'Simulate a sales AI workflow',
		workflowLead: 'Click through the steps to see the difference between a chatbot and an agent with workflow rights.',
		quoteTitle: 'Simulate an AI Agent that advises and drafts quotes automatically',
		quoteLead: 'Click “run automation” to see a customer request move from new lead to approved quotation and follow-up in about 60 operating seconds.',
		quoteStart: 'Run automation',
		quotePause: 'Pause',
		quoteReset: 'Restart',
		quoteAction: 'Agent action',
		quoteOutput: 'Output',
		quoteControl: 'Guardrail',
		quoteOwner: 'Owner',
		useCaseTitle: 'Pick a 90-day starting point',
		useCaseLead: 'Choose a function and turn the AI idea into a small, repeatable and measurable pilot.',
		pain: 'Bottleneck',
		pilot: 'Suggested pilot',
		metric: 'Success metric',
		steps: ['Capture need', 'Retrieve data', 'Recommend option', 'Draft quote', 'Wait for approval', 'Write CRM'],
		stepNotes: ['Customer describes the need via form/chat.', 'Agent retrieves catalog, pricing rules and customer history.', 'Agent selects a product group and advisory rationale.', 'Agent drafts an output for sales to review.', 'Human approves risky price/terms.', 'Result is saved for learning and follow-up.'],
	},
};

function cx(...classes: Array<string | false | undefined>) {
	return classes.filter(Boolean).join(' ');
}

export function AgentMaturityPlayground({ locale = 'vi' }: { locale?: Locale }) {
	const [selected, setSelected] = useState(3);
	const t = dict[locale];
	const level = levels[selected - 1];

	return (
		<section className="not-prose my-10 overflow-hidden rounded-[2rem] border border-line bg-elev p-5 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)] sm:p-6">
			<div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="mb-2 inline-flex rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">AI Agent Playground</p>
					<h3 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-fg sm:text-3xl">{t.maturityTitle}</h3>
					<p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{t.maturityLead}</p>
				</div>
				<div className="rounded-2xl bg-brand px-4 py-3 text-center text-white">
					<span className="block text-xs uppercase tracking-[0.16em] opacity-80">Level</span>
					<strong className="text-3xl">{selected}</strong>
				</div>
			</div>

			<div className="grid gap-3 sm:grid-cols-5">
				{levels.map((item) => (
					<button
						key={item.id}
						type="button"
						onClick={() => setSelected(item.id)}
						className={cx(
							'rounded-2xl border p-3 text-left transition duration-200 hover:-translate-y-0.5',
							selected === item.id
								? 'border-brand bg-brand text-white shadow-lg'
								: 'border-line bg-elev/70 text-fg hover:border-brand'
						)}
					>
						<span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-fg/10 text-sm font-bold">{item.id}</span>
						<strong className="block text-sm leading-tight">{item.name[locale]}</strong>
						<small className={cx('mt-1 block text-xs leading-5', selected === item.id ? 'opacity-85' : 'text-muted')}>{item.tag[locale]}</small>
					</button>
				))}
			</div>

			<div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="rounded-3xl border border-line bg-bg p-5">
					<h4 className="m-0 text-xl font-semibold tracking-[-0.03em]">{level.name[locale]}</h4>
					<p className="mt-2 text-sm leading-6 text-muted">{level.what[locale]}</p>
					<div className="mt-4 grid gap-3 sm:grid-cols-3">
						{[
							[t.value, level.value[locale]],
							[t.risk, level.risk[locale]],
							[t.kpi, level.kpi[locale]],
						].map(([label, text]) => (
							<div key={label} className="rounded-2xl border border-line bg-elev/70 p-3">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
								<p className="mt-2 text-sm leading-6">{text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-3xl border border-line bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--brand)_12%,transparent),transparent_35%),var(--bg)] p-5">
					<span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{t.stack}</span>
					<div className="mt-4 flex flex-wrap gap-2">
						{level.tools.map((tool) => (
							<span key={tool} className="rounded-full border border-line bg-elev px-3 py-1.5 text-sm font-medium shadow-sm">{tool}</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function AgentWorkflowSimulator({ locale = 'vi' }: { locale?: Locale }) {
	const [active, setActive] = useState(0);
	const t = dict[locale];

	return (
		<section className="not-prose my-10 rounded-[2rem] border border-line bg-elev p-5 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)] sm:p-6">
			<h3 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-fg sm:text-3xl">{t.workflowTitle}</h3>
			<p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{t.workflowLead}</p>
			<div className="mt-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
				<div className="grid gap-2">
					{t.steps.map((step, index) => (
						<button
							key={step}
							type="button"
							onClick={() => setActive(index)}
							className={cx(
								'flex items-center gap-3 rounded-2xl border p-3 text-left transition',
								active === index ? 'border-brand bg-brand text-white' : 'border-line bg-elev/70 hover:border-brand'
							)}
						>
							<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fg/10 text-sm font-bold">{index + 1}</span>
							<span className="font-semibold">{step}</span>
						</button>
					))}
				</div>
				<div className="relative overflow-hidden rounded-3xl border border-line bg-bg p-5">
					<div className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">{active + 1}/6</div>
					<div className="mb-5 h-2 overflow-hidden rounded-full bg-fg/10">
						<div className="h-full rounded-full bg-brand transition-all duration-300" style={{ width: `${((active + 1) / t.steps.length) * 100}%` }} />
					</div>
					<p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{t.steps[active]}</p>
					<h4 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{t.stepNotes[active]}</h4>
					<div className="mt-5 grid gap-3 sm:grid-cols-3">
						{['Input', 'AI action', 'Human control'].map((label, index) => (
							<div key={label} className="rounded-2xl border border-line bg-elev p-3 shadow-sm">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
								<div className={cx('mt-3 h-2 rounded-full', index <= Math.min(active, 2) ? 'bg-brand' : 'bg-fg/10')} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


export function AgentQuoteAutomationSimulator({ locale = 'vi' }: { locale?: Locale }) {
	const [active, setActive] = useState(0);
	const [running, setRunning] = useState(false);
	const t = dict[locale];
	const stages = quoteAutomationStages[locale];
	const current = stages[active];

	useEffect(() => {
		if (!running) return;
		const timer = window.setTimeout(() => {
			setActive((index) => {
				if (index >= stages.length - 1) {
					setRunning(false);
					return index;
				}
				return index + 1;
			});
		}, 1200);
		return () => window.clearTimeout(timer);
	}, [active, running, stages.length]);

	return (
		<section className="not-prose my-10 overflow-hidden rounded-[2rem] border border-line bg-elev shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)]">
			<div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
				<div className="bg-neutral-950 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--brand)_28%,transparent),transparent_45%)] p-5 text-white sm:p-6">
					<p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Automation demo</p>
					<h3 className="m-0 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{t.quoteTitle}</h3>
					<p className="mt-3 text-sm leading-6 text-white/75">{t.quoteLead}</p>
					<div className="mt-5 flex flex-wrap gap-2">
						<button type="button" onClick={() => setRunning((value) => !value)} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-950 shadow-lg transition hover:-translate-y-0.5">
							{running ? t.quotePause : t.quoteStart}
						</button>
						<button type="button" onClick={() => { setActive(0); setRunning(true); }} className="rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10">
							{t.quoteReset}
						</button>
					</div>
					<div className="mt-6 rounded-3xl border border-white/15 bg-black/20 p-4 backdrop-blur">
						<div className="flex items-center justify-between gap-4">
							<span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{current.time}</span>
							<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{active + 1}/{stages.length}</span>
						</div>
						<div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
							<div className="h-full rounded-full bg-cyan-300 transition-all duration-500" style={{ width: `${((active + 1) / stages.length) * 100}%` }} />
						</div>
						<h4 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{current.name}</h4>
						<p className="mt-2 text-sm leading-6 text-white/75"><strong className="text-white">{t.quoteOwner}:</strong> {current.owner}</p>
					</div>
				</div>

				<div className="p-5 sm:p-6">
					<div className="grid gap-2 sm:grid-cols-6">
						{stages.map((stage, index) => (
							<button
								key={stage.name}
								type="button"
								onClick={() => { setActive(index); setRunning(false); }}
								className={cx(
									'rounded-2xl border p-3 text-left transition hover:-translate-y-0.5',
									active === index ? 'border-brand bg-brand text-white' : 'border-line bg-elev/70 hover:border-brand'
								)}
							>
								<span className="block text-xs font-bold opacity-70">{stage.time}</span>
								<strong className="mt-1 block text-xs leading-5">{stage.name}</strong>
							</button>
						))}
					</div>

					<div className="mt-5 grid gap-3 md:grid-cols-3">
						{[
							[t.quoteAction, current.action],
							[t.quoteOutput, current.output],
							[t.quoteControl, current.control],
						].map(([label, text]) => (
							<div key={label} className="rounded-3xl border border-line bg-bg p-4">
								<span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
								<p className="mt-3 text-sm font-semibold leading-6 tracking-[-0.01em]">{text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function AgentUseCasePicker({ locale = 'vi' }: { locale?: Locale }) {
	const [active, setActive] = useState(0);
	const t = dict[locale];
	const cases = useCases[locale];
	const selected = useMemo(() => cases[active], [active, cases]);

	return (
		<section className="not-prose my-10 rounded-[2rem] border border-line bg-elev p-5 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.3)] sm:p-6">
			<h3 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-fg sm:text-3xl">{t.useCaseTitle}</h3>
			<p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{t.useCaseLead}</p>
			<div className="mt-5 flex flex-wrap gap-2">
				{cases.map((item, index) => (
					<button key={item.area} type="button" onClick={() => setActive(index)} className={cx('rounded-full border px-4 py-2 text-sm font-semibold transition', active === index ? 'border-brand bg-brand text-white' : 'border-line bg-elev hover:border-brand')}>
						{item.area}
					</button>
				))}
			</div>
			<div className="mt-5 grid gap-3 md:grid-cols-3">
				{[
					[t.pain, selected.pain],
					[t.pilot, selected.pilot],
					[t.metric, selected.metric],
				].map(([label, text]) => (
					<div key={label} className="rounded-3xl border border-line bg-bg p-4">
						<span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
						<p className="mt-3 text-base font-semibold leading-7 tracking-[-0.02em]">{text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
